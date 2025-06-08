import React from "react"
const about = () => {

  React.useEffect(() => {
    let previousTitle = document.title;
    document.title = `About`;

    return () => {
      document.title = previousTitle;
    }
  }, [])
  return (
    <div>about</div>
  )
}
export default about