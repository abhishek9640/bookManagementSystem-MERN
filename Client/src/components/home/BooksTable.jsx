import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-collapse border border-gray-300'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='border border-gray-300 py-2 px-4'>No</th>
          <th className='border border-gray-300 py-2 px-4'>Title</th>
          <th className='border border-gray-300 py-2 px-4 hidden md:table-cell'>Author</th>
          <th className='border border-gray-300 py-2 px-4 hidden md:table-cell'>Publish Year</th>
          <th className='border border-gray-300 py-2 px-4'>Operation</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='border-b border-gray-300'>
            <td className='border border-gray-300 py-2 px-4 text-center'>{index + 1}</td>
            <td className='border border-gray-300 py-2 px-4 text-center'>{book.title}</td>
            <td className='border border-gray-300 py-2 px-4 text-center hidden md:table-cell'>{book.author}</td>
            <td className='border border-gray-300 py-2 px-4 text-center hidden md:table-cell'>{book.publishYear}</td>
            <td className='border border-gray-300 py-2 px-4 text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-green-600 hover:text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-yellow-600 hover:text-yellow-800' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-red-600 hover:text-red-800' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BooksTable
