import Footer from './footer';

const Container = ({ children }) => (
  <div className="flex text-accent-1 justify-center pt-0 md:pt-8 mx-4 min-h-screen">
    <div className="flex flex-col justify-between max-w-screen-lg">
      <div className="flex flex-col border border-t-0 md:border rounded-b shadow-2xl w-full md:rounded-t divide-y">
        {children.map((child, index) => (
          <div id={child.props.id} key={index} className="p-4 md:p-8">
            {child}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  </div>
);

export default Container;
