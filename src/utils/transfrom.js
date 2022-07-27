/**
 * function to transform UTC date to day/month/year date
 *
 * @param {string} UTC
 * @returns {string}
 */
export function transformDate(UTC) {
  const date = new Date(UTC);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return formattedDate;
}

/**
 * function to transform unformatted html to formatted html
 *
 * @param {string} html
 * @returns {string} formatted html
 */
export function transformHtml(html) {
  let description = html.replace(/&lt;/g, "<");
  description = description.replace(/&gt;/g, ">");
  description = description.replace("<!-- SC_OFF -->", "");
  description = description.replace("<!-- SC_ON -->", "");

  return description;
}
