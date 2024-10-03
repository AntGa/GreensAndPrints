import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-soft-ivory',
        {
          relative: label,
          'border-2 border-charcoal-gray': active,
          'border-neutral-200': !active,
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx(
            'relative h-full w-full object-contain hover:border-black',
            {
              'transition duration-300 ease-in-out group-hover:scale-105':
                isInteractive,
            }
          )}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
