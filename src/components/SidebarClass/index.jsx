import InsertLinkIcon from '@mui/icons-material/InsertLink';

import SiderbarClassItem from '~/components/SiderbarClassItem'
import SiderbarClassHeader from '~/components/SiderbarClassHeader'
import styles from './styles.module.css';

function SidebarClass() {
      return (
        <div className={styles.wrap}>
          <SiderbarClassHeader/>
          <SiderbarClassItem/>
          <SiderbarClassItem active={false}/>
          <SiderbarClassItem active={false}/>
          <SiderbarClassItem active={false}/>
          <SiderbarClassItem active={false}/>
          <SiderbarClassItem active={false}/>
          <SiderbarClassItem active={false} footer={true}/>
        </div>
      );
}

export default SidebarClass;
