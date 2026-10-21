import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GROUPS } from "../data";

const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", group: GROUPS[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...form,
      id: Date.now(),
      favorite: false
    };
    onAdd(newContact);
    navigate("/contacts", { replace: true });
  };

  return (
    <div>
      <h2>Thêm liên hệ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ tên:</label>
          <input id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input id="phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        </div>
        <div>
          <label htmlFor="group">Nhóm:</label>
          <select id="group" value={form.group} onChange={e => setForm({...form, group: e.target.value})}>
            {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};
export default AddContact;