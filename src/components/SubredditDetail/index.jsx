import React, { useEffect, useState } from "react";
import { getSubreddit } from "../../api/reddit";
import { transformDate, transformHtml } from "../../utils/transfrom";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./styles.css";


/**
 * Component that renders the detail of a subreddit
 * 
 * @urlParam {string} id
 * @returns {JSX.Element}
 */
const SubredditDetail = () => {
  const [subreddit, setSubreddit] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    !subreddit &&
      getSubreddit(id).then((res) => {
        if (res.error) {
          navigate("/error");
          return;
        }

        const rawDescription = res.description_html;
        const rawDate = res.created;

        let description = transformHtml(rawDescription);
        const formattedDate = transformDate(rawDate);

        setSubreddit({
          ...res,
          description_html: description,
          created: formattedDate,
        });
        setLoading(false);
      });
  }, []);
  return (
    <article>
      {loading ? (
        <button className="loading" aria-busy="true">
          Please wait
        </button>
      ) : (
        <>
          {subreddit && (
            <>
              <header>
                <div className="title">
                  {subreddit.icon_img && (
                    <img
                      className="title_icon_img"
                      src={subreddit.icon_img}
                      alt={subreddit.title}
                    />
                  )}
                  <h3>
                    <a
                      href={`https://www.reddit.com
  /${subreddit.url}`}
                    >
                      {subreddit.display_name}
                    </a>
                  </h3>
                </div>
                {subreddit.header_img && (
                  <img src={subreddit.header_img} alt="" />
                )}
              </header>
              <div
                dangerouslySetInnerHTML={{ __html: subreddit.description_html }}
              />
              <footer>
                <Link to="/">⬅️ Go back</Link>
                <p>{subreddit.subscribers} Subscribers</p>
                <p>Created at {subreddit.created}</p>
                <a
                  href={`https://www.reddit.com
  /${subreddit.url}`}
                >
                  Go to Subreddit: {subreddit.url} ➡️
                </a>
              </footer>
            </>
          )}
        </>
      )}
    </article>
  );
};

export default SubredditDetail;
