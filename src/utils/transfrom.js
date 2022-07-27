export function transformDate(UTC) {
  const date = new Date(UTC);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return formattedDate;
}

export function transformHtml(html) {
  let description = html.replace(/&lt;/g, "<");
  description = description.replace(/&gt;/g, ">");
  description = description.replace("<!-- SC_OFF -->", "");
  description = description.replace("<!-- SC_ON -->", "");

  return description;
}
