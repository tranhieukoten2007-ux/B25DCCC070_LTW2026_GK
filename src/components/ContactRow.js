import { Link } from "react-router-dom";

const ContactRow = ({ contact, onDelete, onToggleFavorite }) => {
  const { id, name, phone, group, favorite } = contact;
  return (
    <tr>
      <td><Link to={`/contacts/${id}`}>{name}</Link></td>
      <td>{phone}</td>
      <td>{group}</td>
      <td>{favorite ? "Có" : "Không"}</td>
      <td>
        <button onClick={() => onToggleFavorite(id)}>Đổi yêu thích</button>
        <button onClick={() => onDelete(id)}>Xóa</button>
      </td>
    </tr>
  );
};
export default ContactRow;