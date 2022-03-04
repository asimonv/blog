import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Button } from "../../components/Button";
import { StaticCodeSnippet } from "../../components/StaticCodeSnippet";
import { Article } from "../../components/Layout";
import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title";

const components = {
  Button,
  StaticCodeSnippet,
  p: props => <Paragraph {...props} />,
};

const PostPage = ({ frontMatter: { title, date, layout }, mdxSource }) => {
  switch (layout) {
    case "Article":
      return (
        <Article>
          <time className="font-medium text-sm tracking-wide">
            {date}
          </time>
          <Title>{title}</Title>
          <MDXRemote {...mdxSource} components={components} />
        </Article>
      );

    default:
      return (
        <>
          <h1>{title}</h1>
          <MDXRemote {...mdxSource} components={components} />
        </>
      );
  }
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
