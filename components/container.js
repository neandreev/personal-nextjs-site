import Footer from './footer';

const Container = ({ children }) => (
  <div className="flex text-accent-1 justify-center pt-8 mx-4 min-h-screen">
    <div className="flex flex-col justify-between max-w-screen-lg">
      <div className="flex flex-col border rounded-lg shadow-2xl w-full divide-y">
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
