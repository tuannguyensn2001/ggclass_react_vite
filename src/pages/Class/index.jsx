import CardCourse from "~/components/CardCourse";
import { useQuery } from "react-query";
import API from "~/network/API";
import { useEffect, useMemo, useState } from "react";
import { STATUS } from "~/enums/class";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import styles from "./styles.module.css"
import ClassModalAdd from "~/components/ClassModalAdd";
import useModal from "~/hooks/useModal";
import ClassHeader from "~/components/ClassHeader";
import ClassContentHeader from "~/components/ClassContentHeader";

function Class() {
    const {
        isOpen: openAddModal,
        open: handleOpenAddModal,
        close: handleCloseAddModal,
    } = useModal();
    const [listData,setListData] = useState();
    // get data 
    const { data } = useQuery("classes", async () => {
      const response = await API.get("/v1/classes");
      return response.data;
    },
    {
       onSuccess(data) {
        setListData(data.data);
      },
    }
    );
    // Create classes
    const { mutate } = useMutation(
      "submit",
      async (classes) => {
        const response = await API.post("/v1/classes", classes);
        return response.data;
      },
      {
         onSuccess(classes) {
          setListData((prev)=> (
             [ ...prev,
              classes.data
          ]
          ))
          toast.success("Thêm lớp học thành công");
        },
      }
    );
    const createClasses = (data)=>{
      mutate(data);
    }
    
    const activeClass = useMemo(() => {
      if (!Boolean(listData) || !Array.isArray(listData)) return [];
      return listData.filter((item) => item?.statusClass === STATUS.ACTIVE);
    }, [listData]);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <ClassHeader/>
                <ClassContentHeader handleOpenAddModal={handleOpenAddModal}/>
            </div>
            <div className={styles.listClasses}>
            {activeClass.map((item,index) => (
                <CardCourse
                key={index}
                id={item?.id}
                name={item?.name}
                description={"nice"}
                imageUrl={
                    "https://upload.wikimedia.org/wikipedia/commons/9/94/Martin_Garrix_Come_Up_Show_cropped.jpg"
                }
                />
            ))}
            </div>
            <ClassModalAdd  subMitForm={createClasses} openAddModal={openAddModal} handleCloseAddModal={handleCloseAddModal}/>
      </div>    );
}

export default Class;
