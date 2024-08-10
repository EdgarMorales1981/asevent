import  styles from '@/styles/home.module.css'
import MenuInvitados     from "@/pages/MenuInvitados";
const Sponsor = () => {
    return (
        <div className='container'>
            <div>
                <MenuInvitados/>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Sponsor</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    condimentum, odio euismod gravida tincidunt, turpis metus tincidunt nunc, et luctus lacus lacus in
                    sapien. Nullam nec nisi</p> </div>

        </div>
    );


}

export default Sponsor;
