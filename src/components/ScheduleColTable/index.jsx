import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Fragment, useMemo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import ScheduletableHeaderItem from "~/components/ScheduletableHeaderItem";
import ScheduleDetailclasses from "~/components/ScheduleDetailclasses";
import ScheduleContentClassesItem from "~/components/ScheduleContentClassesItem";

function ScheduleColTable({ item, addSchedule }) {
  return (
    <div className={styles.col}>
      <ScheduletableHeaderItem
        addSchedule={addSchedule}
        text={item?.text}
        date={item?.date}
      />
      <div className={styles.col_wrap}>
        {item?.children ? (
          item.children.map((child, index) => (
            <Fragment key={index}>
              <Tippy
                interactive
                offset={[72, -40]}
                placement="right"
                render={() => <ScheduleDetailclasses />}
              >
                <div>
                  <ScheduleContentClassesItem
                    name={child?.name}
                    time={child?.time}
                    number={child?.number}
                  />
                </div>
              </Tippy>
            </Fragment>
          ))
        ) : (
          <div className={styles.noClasses}>Không có lịch học</div>
        )}
      </div>
    </div>
  );
}

ScheduleColTable.propTypes = {
  item: PropTypes.object,
};

export default ScheduleColTable;
