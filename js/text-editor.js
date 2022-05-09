let quill = new Quill('#editor-inner', {
    modules: {
        toolbar: [
            ['bold', 'underline', 'strike'],
            [{ 'color': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
        ]
    },
    placeholder: 'You can write text',
    theme: 'snow',
});
