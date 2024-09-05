import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam
        harum, earum, debitis ad labore tempore dolor autem asperiores nisi ipsa
        deserunt officia esse impedit et dolorem hic iste eaque?
      </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
      {/* NoteView */}
    </JournalLayout>
  );
};
