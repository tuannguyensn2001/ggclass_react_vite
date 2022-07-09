import { useEffect } from 'react';
import styles from './styles.module.css'

function HeaderContent() {

     useEffect(() =>{
         const elements = document.querySelectorAll('._item_tm3d5_15');
         console.log('abcd elements',elements)
     
         elements.forEach(element =>{
                 
             element.addEventListener('click', () =>{
                 document.querySelector('._active_tm3d5_39').classList.remove('_active_tm3d5_39')
                 element.classList.add('_active_tm3d5_39');
             })
         })

     },[])
    return (
        <div className={styles.wrap}>
                        <a className={`${styles.item} ${styles.active}`}>
                            <p>Lớp học</p>
                        </a>
                        <a className={styles.item}>
                            <p>Học liệu</p>
                        </a>
                        <a className={styles.item}>
                            <p>Lịch học</p>
                        </a>
                        <a className={styles.item}>
                            <p>Hướng dẫn</p>
                        </a>
                </div>
    )
}

export default HeaderContent;