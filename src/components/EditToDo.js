function EditToDo() {
	return (
		<form className="flex-grow-1">
			<div className="input-group">
				<input type="text" className={`form-control rounded-0 `}></input>
				<button className="btn btn-primary rounded-0" type="submit">
					<i className="far fa-edit"></i>
				</button>
				<button className="btn btn-danger rounded-0" type="button">
					<i className="fas fa-times"></i>
				</button>
			</div>
		</form>
	);
}
export default EditToDo;
