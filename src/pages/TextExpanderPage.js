import TextExpander from "../components/TextExpander";

export default function TextExpanderPage() {
  return (
    <div>
      <TextExpander>
        Want to chat with someone you just met but do not have any topics or
        conversation starters. Let's check these Random Topic Generator tool
        that provides a list of topics and conversation starters. This tool is
        not just providing single-word topics, it also provides a bunch of
        questions, and by using these questions you can easily get the idea for
        starting your conversation.
      </TextExpander>

      <TextExpander
        collapsedWordsNumber={20}
        buttonColor="red"
        expandBtnText="Expand Text"
        collapseBtnText="Collapse Text"
      >
        Want to chat with someone you just met but do not have any topics or
        conversation starters. Let's check these Random Topic Generator tool
        that provides a list of topics and conversation starters. This tool is
        not just providing single-word topics, it also provides a bunch of
        questions, and by using these questions you can easily get the idea for
        starting your conversation.
      </TextExpander>
    </div>
  );
}
