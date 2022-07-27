import React, { useState, useEffect } from "react";
import { getSubreddits } from "../../api/reddit";
import { transformDate } from "../../utils/transfrom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

/**
 * Component that renders the list of subreddits
 * @returns {JSX.Element}
 */
const SubredditList = () => {
  const [subreddits, setSubreddits] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !subreddits &&
      getSubreddits().then((res) => {
        const subreddits = res.map((subreddit) => {
          const rawDate = subreddit.created;
          const formattedDate = transformDate(rawDate);

          return {
            ...subreddit,
            created: formattedDate,
          };
        });
        setSubreddits(subreddits);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/subreddit/${id}`);
  };

  return (
    <div>
      <main>
        <h3 className="subreddit_title">Subreddits</h3>
        {loading ? (
          <button className="loading" aria-busy="true">
            Please wait
          </button>
        ) : (
          <table>
            <thead>
              <tr>
                <th>icon</th>
                <th>Name</th>
                <th>Description</th>
                <th>Subscribers</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {subreddits &&
                subreddits.map((subreddit) => (
                  <tr
                    key={subreddit.id}
                    className="subreddit_element"
                    onClick={() => {
                      handleNavigate(subreddit.id);
                    }}
                  >
                    <td>
                      <img
                        className="subreddit_element_image"
                        src={
                          subreddit.icon_img
                            ? subreddit.icon_img
                            : "/question-mark.png"
                        }
                        alt={subreddit.icon_img ? subreddit.name : "No icon"}
                      />
                    </td>
                    <td>{subreddit.display_name}</td>
                    <td>
                      {subreddit.public_description
                        ? subreddit.public_description
                        : "[[  This Subreddit has no description  ]]"}
                    </td>
                    <td>{subreddit.subscribers}</td>
                    <td>{subreddit.created}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default SubredditList;
