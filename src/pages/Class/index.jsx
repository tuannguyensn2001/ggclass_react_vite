import CardCourse from "~/components/CardCourse";
import { useQuery } from "react-query";
import API from "~/network/API";
import { useMemo } from "react";
import { STATUS } from "~/enums/class";
import { useMutation } from "react-query";
import { toast } from "react-toastify";


import styles from "./styles.module.css"
import ClassModalAdd from "~/components/ClassModalAdd";
import useModal from "~/hooks/useModal";

function Class() {

    const {
      isOpen: openAddModal,
      open: handleOpenAddModal,
      close: handleCloseAddModal,
  } = useModal();
 
  // get data classes
  const { data } = useQuery("classes", async () => {
    const response = await API.get("/v1/classes");
    return response.data;
  });
  

  // Create classes
  const { mutate } = useMutation(
    "submit",
    async (data) => {
      const response = await API.post("/v1/classes", data);
      return response.data;
    },
    {
      async onSuccess(data) {
        toast.success("Thêm lớp học thành công");
      },
    }
  );
  const createClasses = (data)=>{
    mutate(data);
  }
console.log('data duoi',data)
  const activeClass = useMemo(() => {
    if (!Boolean(data?.data) || !Array.isArray(data?.data)) return [];
    return data?.data.filter((item) => item?.statusClass === STATUS.ACTIVE);
  }, [data]);
  
  return (
    <div>
      <button className={styles.addClass} onClick={handleOpenAddModal} >+ Thêm lớp học</button>
      <div className={"tw-grid tw-grid-cols-2 tw-gap-5 tw-mt-2"}>
        {activeClass.map((item,index) => (
          <CardCourse
            id={item?.id}
            key={index}
            name={item?.name}
            description={"nice"}
            imageUrl={
              "https://upload.wikimedia.org/wikipedia/commons/9/94/Martin_Garrix_Come_Up_Show_cropped.jpg"
            }
          />
        ))}
      </div>
      <ClassModalAdd  subMitForm={createClasses} openAddModal={openAddModal} handleCloseAddModal={handleCloseAddModal}/>
    </div>
  );
}

export default Class;
