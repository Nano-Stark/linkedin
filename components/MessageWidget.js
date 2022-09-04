import MessageSender from "./MessageSender";
import MessageBody from "./MessageBody";

const MessageWidget = () => {
  return (
    <div className="sm:px-5 flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto sm:pt-7 gap-x-7 pb-40 ">
      <div className="rounded-md bg-white flex w-full h-screen divide-x-2">
        <div className="flex-1 hidden sm:block">
          <div className="flex justify-between border mb-2 p-2 ">
            <p>messaging</p>
            <div>
              <span>•••</span>
              <span className="ml-4">🖋🖊</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <input
                placeholder="search..."
                className="focus:outline-none bg-transparent hover:bg-teal-200/70 rounded-md mb-2"
              />
              <p>🔍</p>
            </div>
          </div>
          <section>
            <MessageSender />
            <MessageSender />
            <MessageSender />
          </section>
        </div>
        <div className="flex-[1.6_2_0]">
          <MessageBody />
        </div>
      </div>

      <section className="hidden lg:flex flex-col gap-y-2 ">
        <section className="bg-white w-80 rounded-md px-4">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="object-cover w-full aspect-square"
          />
        </section>
      </section>
    </div>
  );
};

export default MessageWidget;
