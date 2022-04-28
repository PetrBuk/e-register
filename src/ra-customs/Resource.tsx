import React, { ComponentType, ReactElement, Suspense } from 'react'
import { Resource as RaResource, ResourceProps, Loading, useTranslate, } from 'react-admin'

type Props = ResourceProps

const ShowTitle = ({ resource, record }: any) => {
    return <span>
        {resource + record ? `"${record.name ? record.name : record.id}"` : ''}
    </span>
};

const EditTitle = ({ resource, record }: any) => {
    return <span>
        Upravit {resource + record ? `"${record.name ? record.name : record.id}"` : ''}
    </span>
};

/**
 * Expects to receive React.lazy list, edit, show and create props which
 * should be rendered in Suspense
 * */
const Resource: React.FC<Props> = React.memo(({
    list,
    edit,
    show,
    create,
    name,
    ...props
}) => {
    const translate = useTranslate();
    const createSuspenseComponent = React.useCallback((
        Component: ReactElement | ComponentType | undefined,
        titleType: "list" | "edit" | "show" | "create" = "list") => {
        const getTitle = () => {
            switch (titleType) {
                case "list":
                    return translate(`resources.${name}.name`);
                case "edit":
                    return <EditTitle />
                case "show":
                    return <ShowTitle />
                case "create":
                    return `Vytvořit ${name}`;
                default:
                    return name;
            }
        };
        return (compProps: any) => {
            const Component = compProps.Component
            if (Component === undefined) return null
            return <Suspense fallback={<Loading />}>
                <Component {...compProps} title={getTitle()} />
            </Suspense>;
        };
    }, [ name, translate ])

    return (
        <RaResource
            list={createSuspenseComponent(list)}
            edit={createSuspenseComponent(edit, 'edit')}
            show={createSuspenseComponent(show, 'show')}
            create={create ? createSuspenseComponent(create) : undefined}
            name={name}
            {...props}
        />
    )
})

export default Resource
