
const Skeleton = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-300 rounded-md ${className}`}></div>
    </div>
  )
}

export default Skeleton