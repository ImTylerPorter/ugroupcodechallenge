
const { PlainText, InspectorControls, PanelColorSettings, RichText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody } = wp.components;

// Define custom U Group logo for icon usage
const uGroupIcon = () => (
    <svg width="20px" height="20px" viewBox="0 0 143.7 143.7">
        <path d="M0,0V143.7H143.7V0ZM71.8,108.3a34,34,0,0,1-34-34v-33H55.7v33a16,16,0,0,0,32,0v-33h17.9v33h.2A34,34,0,0,1,71.8,108.3Z" />
    </svg>
)

registerBlockType('project-block/main', {
    title: 'Project',
    icon: uGroupIcon,
    category: 'common',
    attributes: {
        title: {
            source: 'text',
            selector: '.projectTitle'
        },
        description: {
            type: 'array',
            source: 'children',
            selector: '.projectDescription'
        },
        projectBackgroundColor: {
            type: 'string'
        },
    },
    edit({ attributes, setAttributes }) {

        function onChangeBackgroundColor(newBackground) {
            setAttributes({ projectBackgroundColor: newBackground });
        }

        // Define custom colors. Great oppertunity for branding.
        const customColors = [
            {
                name: 'Green',
                slug: 'green',
                color: '#0dc966',
            },
            {
                name: 'Dark',
                slug: 'dark',
                color: '#383838',
            },
            {
                name: 'Gray',
                slug: 'gray',
                color: '#aaa',
            },
            {
                name: 'Light Gray',
                slug: 'light-gray',
                color: '#cdcdcd',
            },
            {
                name: 'White',
                slug: 'white',
                color: '#ffffff',
            }
        ];

        // Check if the background color is dark. If it is, we will assign a class to lighten the text
        let hasDarkBackground = attributes.projectBackgroundColor === '#383838' ? 'lightenText' : '';

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
                            colors: customColors
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
                    className={`heading ${hasDarkBackground}`}
                    style={{ backgroundColor: attributes.projectBackgroundColor }}
                />
                <RichText
                    onChange={content => setAttributes({ description: content })}
                    value={attributes.description}
                    multiline="p"
                    placeholder="Add a description"
                    className={hasDarkBackground}
                />
            </div>
        ];
    },
    save({ attributes }) {
        // Check if the background color is dark. If it is, we will assign a class to lighten the text
        let hasDarkBackground = attributes.projectBackgroundColor === '#383838' ? 'lightenText' : '';
        return (
            <a
                href="#"
                className={`projectItem ${hasDarkBackground}`}
                // If the post does not have a dark background we will assign the color of the text to #383838.
                style={!hasDarkBackground ?
                    { color: '#383838', backgroundColor: attributes.projectBackgroundColor } :
                    { backgroundColor: attributes.projectBackgroundColor }}>
                <div className="projectContent"  >
                    <h3 className={`projectTitle ${hasDarkBackground}`}>{attributes.title}</h3>
                    <div className={`projectDescription`} >
                        {attributes.description}
                    </div>
                </div>
            </a>
        );
    }
});