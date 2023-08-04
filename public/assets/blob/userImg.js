export default function userImg () {
  const userImg =
    'data:image/png;base64,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'
  return userImg
}
