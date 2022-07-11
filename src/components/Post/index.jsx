import avatarDefault from "~/assets/images/avatar_default.png";
import dayjs from "dayjs";
import CustomMenu from "~/components/CustomMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { createElement } from "react";
import { useConfirm } from "material-ui-confirm";

function Post() {
  const confirm = useConfirm();

  return (
    <div
      className={
        "tw-border tw-p-5 tw-rounded-xl tw-border-solid tw-border-slate-300 tw-bg-white "
      }
    >
      <div className={"tw-flex tw-justify-between "}>
        <div className={"tw-flex"}>
          <img
            src={avatarDefault}
            alt=""
            className={"tw-h-12 tw-w-12 tw-rounded-full"}
          />
          <div className={"tw-flex tw-flex-col tw-justify-center tw-ml-2"}>
            <div className={"tw-font-bold"}>Nguyen Van Tuan</div>
            <div className={"tw-text-xs tw-font-normal"}>
              Vao luc {dayjs().format("D/M/YYYY, HH:MM:ss").toString()}
            </div>
          </div>
        </div>
        <div>
          <CustomMenu
            list={[
              {
                text: "Xóa bài viết",
                icon: DeleteIcon,
                props: {
                  onClick() {
                    confirm({ description: " Xoa bai viet nay khong ban" })
                      .then(() => {})
                      .catch((err) => {});
                  },
                },
              },
            ]}
            renderTextMenu={({ text, icon }) => (
              <div className={"tw-px-5 tw-flex"}>
                <div className={"tw-flex tw-flex-col tw-justify-center"}>
                  {createElement(icon, { fontSize: "small" })}
                </div>
                <div
                  className={
                    "tw-flex tw-flex-col tw-justify-center tw-ml-1 tw-mt-0.5 tw-text-sm"
                  }
                >
                  {text}
                </div>
              </div>
            )}
          >
            <div className={"tw-cursor-pointer"}>
              <MoreVertIcon />
            </div>
          </CustomMenu>
        </div>
      </div>

      <div className={"tw-mt-5"}>abc</div>
    </div>
  );
}

export default Post;
