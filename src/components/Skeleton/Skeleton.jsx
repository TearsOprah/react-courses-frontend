import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={60}
    viewBox="0 0 350 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >

    <rect x="80" y="7" rx="3" ry="3" width="270" height="9" />
    <circle cx="45" cy="30" r="25" />
    <rect x="80" y="24" rx="3" ry="3" width="210" height="9" />
    <rect x="80" y="42" rx="3" ry="3" width="150" height="9" />

  </ContentLoader>
  )

export default Skeleton;