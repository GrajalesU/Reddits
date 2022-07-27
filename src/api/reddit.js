
/***
 * function to get the reddit api data
 */
export function getSubreddits() {
  fetch("https://www.reddit.com/reddits.json")
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
}
