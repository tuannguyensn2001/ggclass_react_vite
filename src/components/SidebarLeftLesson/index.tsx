import styles from './styles.module.scss';
import FolderItem from '~/components/FolderItem';
import { IFolder } from '~/models/IFolder';
import useFolderStore from '~/store/useFolderStore';
import { useCallback } from 'react';

interface Props {
    handleOpenModalAddFolder: () => void;
    data?: Array<IFolder>;
}

function SidebarLeftLesson({ handleOpenModalAddFolder, data }: Props) {
    const { setId, id: folderId } = useFolderStore((state) => state);

    const handleClickFolder = useCallback((id: number) => {
        setId(id);
    }, []);

    return (
        <div className={styles.nav}>
            <div className={styles.head}>
                <p className={styles.name}>Thư mục</p>
                <img
                    onClick={() => handleOpenModalAddFolder()}
                    className={styles.img}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADy8vLT09Pp6enm5uYwMDD7+/vj4+NhYWFDQ0Pv7+/g4ODX19d6eno0NDSHh4diYmKgoKBWVlZBQUHHx8c8PDwqKipnZ2eampohISFcXFy4uLgMDAyxsbEbGxtKSkqQkJAKTePFAAACfUlEQVR4nO3dXVfiMBCA4QTFshU/tupSQFf2///JXfTKg7KTZNpMxve59kjeMxTaHiAhAAAAAAAAAAAANGI93PZ3V0k2Y+1Fyy22u5hjX3vhUvdZeUc/ai9d5CK7r5EpbksCW5jibVmg/SnmH4KNTPG5PNB24rVGoOnEvU5h/Fk75CtF7xMfWJ3ig1qh0SkqHYXvTE5x0Cw0OUXFJ+mRwSm+6Bbam6LqYWgyca1eaO2JeqNfGMfFFLrMQr33++ntxt/XvguP9hfeC2M8LL0Xxji4L0y7o9BkYezdF6ZMsdHCuHVfGNfuCx/dF8Yn94XS19N2C6Pw3KbhQuGpTcOFD+4LX90XxoX7wkv3hTfuC2WX+xRaRiGF9lFIoX0VC5eh+ygsp3iYioWnJ4yXUzwMhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhbMWtnhXf7X82iePc+avV0YLRf9dxmhh7pd0TnUUUkghhRRSSCGFFFJIIYWOC9UCzV4f+r/GP8fHfZpzvuO9NgqzUEhhAQqVUEhhAQqVUEhhAQqVUEhhAQqVUEhhAQqVUEhhAf+F/n9TYSYUUmgfhRTaR+F3KZxiB4+5yH77MvujHgasRIX6O+nMR7ZhSfZHrup7EQWG0NdeaLaDsLBwB9KKpNsjTLDh00zEuyNsaq8005U0UGcX0gqexYWNDlE+wlZP3JJ2tire77iC+5TAEB5rrzfZIS0wdK0dineJgaG1M5vUCb5R2Jp7Nn9yAv9dKP6qvXChXnwuc+KphcZeugnS59bDuKudcMZmHGQXvf/RTbKLaDm9ryEBAAAAAAAAAAAAAAAAAAAI/QXmqGzB9RqJEQAAAABJRU5ErkJggg=="
                    alt=""
                />
            </div>
            <div>
                {data &&
                    data.length > 0 &&
                    data?.map((item) => (
                        <FolderItem
                            id={item?.id}
                            onClick={handleClickFolder}
                            active={item?.id === folderId}
                            key={item?.id}
                            name={item?.name}
                        />
                    ))}
            </div>
        </div>
    );
}

export default SidebarLeftLesson;
