
const { PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('project-block/main', {
    title: 'Project',
    icon: 'admin-appearance',
    category: 'common',
    attributes: {
        title: {
            source: 'text',
            selector: '.projectTitle'
        },
    },
    edit({ attributes, setAttributes }) {

        return (

            <div className="projectWrap" >
                <PlainText
                    onChange={content => setAttributes({ title: content })}
                    value={attributes.title}
                    placeholder="Project title"
                    className="heading"
                />
            </div>
        );
    },
    save({ attributes }) {

        return (
            <a href="#" className="project">
                <div className="projectContent">
                    <h3 className="projectTitle">{attributes.title}</h3>
                    <div className="projectDescription">
                        <p>Project Description will go here</p>
                    </div>
                </div>
            </a>
        );
    }
});