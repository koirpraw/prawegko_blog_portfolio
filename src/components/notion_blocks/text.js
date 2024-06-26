

export default function Text({ title }) {
    if (!title) {
        return null;
    }
    return title.map((value) => {
        const { annotations: { bold, code, color, italic, strikethrough, underline, }, text } = value;
        return (
            <span
                className={[
                    bold ? "font-bold" : "",
                    code ? "font-mono bg-slate-400 rounded-md px-4 py-4" : "",
                    italic ? "italic" : "",
                    strikethrough ? "line-through" : "",
                    underline ? "underline" : ""
                ].join('')}
                style={color !== 'default' ? { color } : {}}
                key={text.content}
            >
                {text.link ? <a href={text.link.url}></a> : text.content}
            </span>
        )
    })
}