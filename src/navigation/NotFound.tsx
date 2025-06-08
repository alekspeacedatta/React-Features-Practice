import React from "react"
const NotFound = () => {
  React.useEffect(() => {
      let previousTitle = document.title;
      document.title = `Page did not Fount 404`;
  
      return () => {
        document.title = previousTitle;
      }
    }, [])
  return (
    <div> 404 Not Found </div>
  )
}
export default NotFound