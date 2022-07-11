import Post from "~/components/Post";
import PostEditor from "~/components/PostEditor";

function Newsfeed() {
  return (
    <div>
      <div
        className={
          "tw-mt-10 tw-h-screen tw-bg-slate-50 tw-w-full tw-flex tw-justify-center "
        }
      >
        <div className="tw-w-1/2">
          <div>
            <PostEditor />
          </div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
