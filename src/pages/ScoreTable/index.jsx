import styles from './styles.module.css';
import ScoreTableHeader from '~/components/ScoreTableHeader';
import ScoreTableContentHeader from '~/components/ScoreTableContentHeader';
import ScoreTableContentItem from '~/components/ScoreTableContentItem';
import MemberModalAddStudent from '~/components/MemberModalAddStudent';
import MemberModalEditStudent from '~/components/MemberModalEditStudent';
import { useCallback, useMemo, useState } from 'react';
import useModal from '~/hooks/useModal';
import SiderbarRightMemberItem from '~/components/SiderbarRightMemberItem';
import SiderbarRightMember from '~/components/SiderbarRightMember';
import useManageMember from '~/hooks/useManageMember';
import { useConfirm } from 'material-ui-confirm';
import { ConfirmProvider } from 'material-ui-confirm';

function ScoreTable() {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Bảng điểm</div>
            <div className={styles.content}>
                <div className={styles.table}>
                    <ScoreTableHeader />
                    <ScoreTableContentHeader />
                    <div className={styles.listStudent}>
                        <ScoreTableContentItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScoreTable;
