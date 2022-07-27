import React, { useEffect, useState } from "react";
import { getSubreddit } from "../../api/reddit";

const SubredditDetail = () => {
  const [subreddit, setSubreddit] = useState(undefined);
  const [Description, setDescription] = useState(undefined);

  useEffect(() => {
    const id = "2qs0k";
    !subreddit &&
      getSubreddit(id).then((res) => {
        const rawDescription = res.description_html;
        let description = rawDescription.replace(/&lt;/g, "<");
        description = description.replace(/&gt;/g, ">");
        description = description.replace("<!-- SC_OFF -->", "");
        description = description.replace("<!-- SC_ON -->", "");
        setDescription(description);
        setSubreddit({
          ...res,
          description_html: description,
        });
      });
  }, []);
  return (
    <article>
      {subreddit && (
        <header>
          <h3>{subreddit.display_name}</h3>
          {subreddit.header_img && <img src={subreddit.header_img} alt="" />}
          <div
            dangerouslySetInnerHTML={{ __html: subreddit.description_html }}
          />
        </header>
      )}
    </article>
  );
};

export default SubredditDetail;
