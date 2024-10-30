import { useController } from "../controllers/LoadingController"


const Loading = () => {
  const {loadingText, useChangeText} = useController();

  useChangeText();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <div className="relative w-[60px] h-[60px] rounded-full bg-loading-color animate-spin">
        <div className="absolute w-[50px] h-[50px] bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <p className="text-white font-bold text-xl">{loadingText}</p>
    </div>
  )
}

export default Loading
