
import Post from '../Post';
import styles from './styles.module.css'
import avatarDefault from "~/assets/images/avatar_default.png";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { style } from '@mui/system';
import { Button } from '@mui/material';
import clsx from 'clsx';

function CreatePost() {
    return (
        <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={avatarDefault}
            alt=""
            className={"tw-h-12 tw-w-12 tw-rounded-full"}
          />
          <div className={styles.input}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Nhập nội dung thảo luận với lớp học..."
              className={styles.text}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Button sx={{fontSize:14}} className={clsx(styles.button,styles.addImg)}>Thêm hình</Button>
          <Button sx={{fontSize:14}} className={clsx(styles.button,styles.post)}>Đăng tin</Button>
        </div>
      </div>
        </div>
    );
    }
export default CreatePost