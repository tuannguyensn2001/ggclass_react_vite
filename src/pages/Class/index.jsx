import CardCourse from '~/components/CardCourse';
import { useQuery } from 'react-query';
import API from '~/network/API';
import { useMemo } from 'react';
import { STATUS } from '~/enums/class';

function Class() {
    const { data } = useQuery('classes', async () => {
        const response = await API.get('/v1/classes');
        return response.data;
    });

    const activeClass = useMemo(() => {
        if (!Boolean(data?.data) || !Array.isArray(data?.data)) return [];
        return data?.data.filter((item) => item?.statusClass === STATUS.ACTIVE);
    }, [data]);

    return (
        <div>
            <div className={'tw-grid tw-grid-cols-2 tw-gap-5 tw-mt-10'}>
                {activeClass.map((item) => (
                    <CardCourse
                        key={item?.id}
                        id={item?.id}
                        name={item?.name}
                        description={'nice'}
                        imageUrl={
                            'https://upload.wikimedia.org/wikipedia/commons/9/94/Martin_Garrix_Come_Up_Show_cropped.jpg'
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default Class;
