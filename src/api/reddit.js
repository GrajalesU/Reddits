/***
 * function to get the reddits api data
 */
export function getSubreddits() {
  const subreddits = fetch("https://www.reddit.com/reddits.json")
    .then((json) => {
      return json.json();
    })
    .then((json) => {
      const response = json.data.children;
      const subreddits = response.map((subreddit) => {
        return {
          display_name: subreddit.data.display_name,
          url: subreddit.data.url,
          subscribers: subreddit.data.subscribers,
          created: subreddit.data.created,
          public_description: subreddit.data.public_description,
          name: subreddit.data.name,
          id: subreddit.data.id,
          over_18: subreddit.data.over_18,
          icon_img: subreddit.data.icon_img,
        };
      });
      return subreddits;
    });

  return subreddits;
}

/***
 * function to get the reddit api data
 * @param {string} id - the id of the subreddit
 */
export function getSubreddit(id) {
  const subreddit = fetch(`https://www.reddit.com/reddits.json`)
    .then((json) => {
      return json.json();
    })
    .then((json) => {
      const response = json.data.children;
      const rawSubreddit = response.filter((subreddit) => {
        return subreddit.data.id === id;
      });
      return rawSubreddit[0].data;
    })
    .then((rawSubreddit) => {
      const subreddit = {
        display_name: rawSubreddit.display_name,
        url: rawSubreddit.url,
        subscribers: rawSubreddit.subscribers,
        created: rawSubreddit.created,
        public_description: rawSubreddit.public_description,
        name: rawSubreddit.name,
        id: rawSubreddit.id,
        over_18: rawSubreddit.over_18,
        icon_img: rawSubreddit.icon_img,
        description_html: rawSubreddit.description_html,
        header_img: rawSubreddit.header_img,
      };
      return subreddit;
    })
    .catch((error) => {
      return { error };
    });

  return subreddit;
}
