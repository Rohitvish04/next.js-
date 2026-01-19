import styles from './Card.module.css'

interface CardProps {
    title: string,
    description: string
}

export default function Card({ title, description }: CardProps){
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}