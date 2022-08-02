import Markets from "../components/Markets"
import Trending from "../components/Trending"

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      <Trending />
      <Markets />
    </div>
  )
}

export default CryptoHome