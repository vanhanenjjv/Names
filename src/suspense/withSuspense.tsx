import React from 'react';


type Component<TProps> = React.FunctionComponent<TProps>;

interface SuspenseProps {
  suspended: boolean;
}

function withSuspense<TProps>(Component: Component<TProps & SuspenseProps>): Component<TProps> {
  return function SuspenseWrapper(props: TProps): ReturnType<Component<TProps>> {
    return (
      <React.Suspense fallback={<Component suspended={true} {...props} />}>
        <Component suspended={false} {...props} />
      </React.Suspense>
    );
  };
}


export default withSuspense;
export type { SuspenseProps };
