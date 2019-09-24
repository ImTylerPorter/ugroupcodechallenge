
const { PlainText, InspectorControls, PanelColorSettings } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody } = wp.components;

registerBlockType('project-block/main', {
    title: 'Project',
    icon: 'admin-appearance',
    category: 'common',
    attributes: {
        title: {
            source: 'text',
            selector: '.projectTitle'
        },
        projectBackgroundColor: {
            type: 'string'
        },
    },
    edit({ attributes, setAttributes }) {

        function onChangeBackgroundColor(newBackground) {
            setAttributes({ projectBackgroundColor: newBackground });
        }

        return [
            <InspectorControls>
                <PanelBody
                    title={'Settings'}
                    initialOpen={true}
                >
                    <PanelColorSettings
                        title={'Block Background Color'}
                        colorValue={attributes.projectBackgroundColor}
                        initialOpen={false}
                        colorSettings={[{
                            value: attributes.projectBackgroundColor,
                            onChange: onChangeBackgroundColor,
                            label: 'Choose a background color',
                        }]}
                    >
                    </PanelColorSettings>
                </PanelBody>
            </InspectorControls>,
            <div className="projectWrap" style={{ backgroundColor: attributes.projectBackgroundColor }}>
                <PlainText
                    onChange={content => setAttributes({ title: content })}
                    value={attributes.title}
                    placeholder="Project title"
                    className="heading"
                    style={{ backgroundColor: attributes.projectBackgroundColor }}
                />
            </div>
        ];
    },
    save({ attributes }) {

        return (
            <a href="#" className="projectItem">
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