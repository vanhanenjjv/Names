import React from 'react';


type Component<TProps> = React.FunctionComponent<TProps>;
type Fallback<TProps>  = React.FunctionComponent<TProps>;

interface SuspenseOptions<TProps> {
  Component: Component<TProps>;
  Fallback: Fallback<TProps>;
}

function withSuspense<TProps>(options: SuspenseOptions<TProps>): (props: TProps) => JSX.Element {
  const { Component, Fallback } = options;

  return props => (
    <React.Suspense fallback={<Fallback {...props} />}>
      <Component {...props} />
    </React.Suspense>
  );
}


export default withSuspense;
