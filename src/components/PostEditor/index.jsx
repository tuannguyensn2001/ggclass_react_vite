import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostEditor() {
  return (
    <div>
      <div>
        <ReactQuill theme={"snow"} />
      </div>
    </div>
  );
}

export default PostEditor;
