import React, { useEffect, useState } from "react";
import { getSubreddit } from "../../api/reddit";
import { transformDate, transformHtml } from "../../utils/transfrom";
import "./styles.css";

const SubredditDetail = () => {
  const [subreddit, setSubreddit] = useState(undefined);

  useEffect(() => {
    const id = "2r05i";
    !subreddit &&
      getSubreddit(id).then((res) => {
        const rawDescription = res.description_html;
        const rawDate = res.created;

        let description = transformHtml(rawDescription);
        const formattedDate = transformDate(rawDate);

        setSubreddit({
          ...res,
          description_html: description,
          created: formattedDate,
        });
      });
  }, []);
  return (
    <article>
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
            {subreddit.header_img && <img src={subreddit.header_img} alt="" />}
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: subreddit.description_html }}
          />
          <footer>
            <a
              href={`https://www.reddit.com
/${subreddit.url}`}
            >
              Go to Subreddit: {subreddit.url}
            </a>
            <p>{subreddit.subscribers} Subscribers</p>
            <p>Created at {subreddit.created}</p>
          </footer>
        </>
      )}
    </article>
  );
};

export default SubredditDetail;
