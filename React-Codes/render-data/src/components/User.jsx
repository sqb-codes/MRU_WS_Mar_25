// PROPS - Properties
export const User = ({user_data}) => {
    return (
        <div>
            {
                user_data.map((obj) => (
                <div className='user'>
                    <img src={obj.user_pic}/>
                    <h3>{obj.user_name}</h3>
                    <h4>{obj.user_role}</h4>
                </div>
                ))
            }
        </div>
    )
}