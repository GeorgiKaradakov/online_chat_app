

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[60px] h-[60px] rounded-full bg-loading-color animate-spin">
        <div className="absolute w-[50px] h-[50px] bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}

export default Loading
