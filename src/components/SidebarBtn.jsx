

const SidebarBtn = ({img,title}) =>{
    return (
        <button className="btn sidebar-btn">
        <span className="img">{img}</span>
        <span className="title">{title}</span>
       </button>      
    )
}

export default SidebarBtn;