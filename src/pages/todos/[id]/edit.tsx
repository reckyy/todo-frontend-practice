import { useRouter } from "next/router";
import Link from "next/link";
import EditTodoForm from "../../../../components/EditTodoForm";
import { BallTriangle } from 'react-loader-spinner'

const EditTodoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if(!id){
    <div className="flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-3/4 max-w-lg">
        <EditTodoForm id={parseInt(id as string)} />
        <Link
          href="/"
          className="ml-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default EditTodoPage;
