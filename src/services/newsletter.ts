export const subscribe = ({ mail }: { mail: string }) => {
  return fetch("https://us-central1-blog-3dd22.cloudfunctions.net/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Request failed: " + res.statusText)
    }
  })
}
