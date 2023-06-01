import { Card, Stack } from "react-bootstrap";
import { SimplifiedNote } from "./NoteList";
import { Link } from "react-router-dom";
import styles from  "./NoteList.module.css";
export const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
    
    return (
        <Card
            as={Link}
            to={`/${id}`}
            className={`h-100 text-reset text-decoration-none ${styles.card }`}
        >
            <Card.Body>
                <Stack gap={2} className="align-items-center justify-content-center h-100">
                    <span className="fs-5">{title}</span>
                </Stack>
          </Card.Body>
        </Card>
    );
};
